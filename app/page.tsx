// import clsx from "clsx";
import { redirect } from "next/navigation";
// import { ComponentProps, ReactNode } from "react";
import { auth, signIn } from "@/auth";
import { DASHBOARD_URL } from "@/constants";
import { SignInIcon } from "@/icons";
import { MarketingLayout } from "@/layouts/Marketing";
import { Button } from "@/primitives/Button";
// import { LinkButton } from "@/primitives/Button";
import { Container } from "@/primitives/Container";
import styles from "./page.module.css";

export default async function Index() {
  const session = await auth();

  // If logged in, go to dashboard
  if (session) {
    redirect(DASHBOARD_URL);
  }

  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>
            Real-Time Document Collaboration Platform
          </h1>
          <p className={styles.heroLead}>
            Experience seamless, real-time document editing with powerful tools designed for collaborative success.&nbsp;
          </p>
        </div>
        <div className={styles.heroActions}>
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <Button icon={<SignInIcon />}>Sign in</Button>
          </form>
          {/* <LinkButton
            href="https://liveblocks.io/docs/guides/nextjs-starter-kit"
            target="_blank"
            variant="secondary"
          >
            Learn more
          </LinkButton> */}
        </div>
      </Container>
    </MarketingLayout>
  );
}
