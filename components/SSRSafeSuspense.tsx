import { Suspense, SuspenseProps, useEffect, useState } from "react";

/**
 * This component is used to wrap Suspense in order to prevent it from being rendered on the server,
 * because Suspense is not supported on the server for now in Next.js.
 */
export function SSRSafeSuspense(props: SuspenseProps) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{props.fallback}</>;
}
