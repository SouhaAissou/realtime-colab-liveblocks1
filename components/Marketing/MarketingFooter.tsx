import clsx from "clsx";
import { ComponentProps, useMemo } from "react";
import { GitHubIcon } from "@/icons";
import { LinkButton } from "@/primitives/Button";
import { Container } from "@/primitives/Container";
import styles from "./MarketingFooter.module.css";

export function MarketingFooter({
  className,
  ...props
}: ComponentProps<"footer">) {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className={clsx(className, styles.footer)} {...props}>
      <Container className={styles.container}>
        <LinkButton
          href="httphttps://github.com/SouhaAissou/realtime-colab-liveblocks1"
          icon={<GitHubIcon />}
          target="_blank"
          variant="secondary"
        >
          View source code on GitHub
        </LinkButton>
      </Container>
    </footer>
  );
}
