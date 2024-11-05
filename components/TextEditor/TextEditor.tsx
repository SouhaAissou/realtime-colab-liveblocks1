
"use client";

import { ClientSideSuspense } from "@liveblocks/react";
import { useRef } from "react";
import { useSelf, useThreads } from "@liveblocks/react/suspense";
import { Cursors } from "@/components/Cursors/Cursors"; // Adjust path if necessary
import {
  AnchoredThreads,
  FloatingComposer,
  FloatingThreads,
  useLiveblocksExtension,
} from "@liveblocks/react-tiptap";
import { CharacterCount } from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";
import { Image } from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TaskList from "@tiptap/extension-task-list";
import { TextAlign } from "@tiptap/extension-text-align";
import { Typography } from "@tiptap/extension-typography";
import Youtube from "@tiptap/extension-youtube";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorView } from "prosemirror-view";
import { CommentIcon } from "@/icons";
import { DocumentSpinner } from "@/primitives/Spinner";
import { useIsMobile } from "@/utils";
import { CustomTaskItem } from "./CustomTaskItem";
import { SelectionMenu } from "./SelectionMenu";
import { Toolbar } from "./Toolbar";
import { WordCount } from "./WordCount";
import styles from "./TextEditor.module.css";

export function TextEditor() {
  return (
    <ClientSideSuspense fallback={<DocumentSpinner />}>
      <TiptapEditor />
    </ClientSideSuspense>
  );
}

// Collaborative text editor with rich text and live cursors
function TiptapEditor() {
  const liveblocks = useLiveblocksExtension();
  const editorRef = useRef<HTMLDivElement>(null); // Reference for cursor tracking

  // Check if the user has write access in the current room
  const canWrite = useSelf((me) => me.canWrite);

  // Set up editor with plugins, including liveblocks for real-time collaboration
  const editor = useEditor({
    editable: canWrite,
    editorProps: {
      attributes: {
        class: styles.editor,
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false,
        blockquote: { HTMLAttributes: { class: "tiptap-blockquote" } },
        code: { HTMLAttributes: { class: "tiptap-code" } },
        codeBlock: { languageClassPrefix: "language-", HTMLAttributes: { class: "tiptap-code-block", spellcheck: false } },
        heading: { levels: [1, 2, 3], HTMLAttributes: { class: "tiptap-heading" } },
        horizontalRule: { HTMLAttributes: { class: "tiptap-hr" } },
        listItem: { HTMLAttributes: { class: "tiptap-list-item" } },
        orderedList: { HTMLAttributes: { class: "tiptap-ordered-list" } },
        paragraph: { HTMLAttributes: { class: "tiptap-paragraph" } },
      }),
      CharacterCount,
      Highlight.configure({ HTMLAttributes: { class: "tiptap-highlight" } }),
      Image.configure({ HTMLAttributes: { class: "tiptap-image" } }),
      Link.configure({ HTMLAttributes: { class: "tiptap-link" } }),
      Placeholder.configure({ placeholder: "Start writing…", emptyEditorClass: "tiptap-empty" }),
      CustomTaskItem,
      TaskList.configure({ HTMLAttributes: { class: "tiptap-task-list" } }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Typography,
      Youtube.configure({ modestBranding: true, HTMLAttributes: { class: "tiptap-youtube" } }),
    ],
  });

  return (
    <div ref={editorRef} className={styles.container}>
      {/* Add Cursors component for live cursor tracking */}
      <Cursors element={editorRef} />

      {canWrite && editor && (
        <div className={styles.editorHeader}>
          <Toolbar editor={editor} />
        </div>
      )}
      <div className={styles.editorPanel}>
        {editor && <SelectionMenu editor={editor} />}
        <div className={styles.editorContainerOffset}>
          <div className={styles.editorContainer}>
            <EditorContent editor={editor} />
            <FloatingComposer editor={editor} style={{ width: 350 }} />
            <div className={styles.threads}>
              <Threads editor={editor} />
            </div>
          </div>
        </div>
      </div>
      {editor && <WordCount editor={editor} />}
    </div>
  );
}

function Threads({ editor }: { editor: Editor | null }) {
  const { threads } = useThreads();
  const isMobile = useIsMobile();

  if (!threads || !editor) {
    return null;
  }

  if (!isMobile && threads.length === 0) {
    return (
      <div className={styles.noComments}>
        <div className={styles.noCommentsHeader}>No comments yet</div>
        <p>
          <span className={styles.noCommentsButton}>
            <CommentIcon />
          </span>
          Create a comment by selecting text and pressing the comment button.
        </p>
      </div>
    );
  }

  return isMobile ? (
    <FloatingThreads threads={threads} editor={editor} />
  ) : (
    <AnchoredThreads threads={threads} editor={editor} style={{ width: 350 }} />
  );
}

// Prevents a matchesNode error on hot reloading
EditorView.prototype.updateState = function updateState(state) {
  // @ts-ignore
  if (!this.docView) return;
  // @ts-ignore
  this.updateStateInner(state, this.state.plugins != state.plugins);
};
