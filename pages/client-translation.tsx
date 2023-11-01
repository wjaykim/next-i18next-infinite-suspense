import { useTranslation } from "next-i18next";
import Link from "next/link";
import { SSRSafeSuspense } from "@/components/SSRSafeSuspense";

function ClientTranslatedComponent() {
  const { t } = useTranslation(['client'], { useSuspense: true });

  return (
    <div>
      <Link href={'/server-translation'}>
        {t('client:toServer')}
      </Link>
    </div>
  );
}

function ClientTranslationPage() {
  return (
    <SSRSafeSuspense fallback={<div>Loading...</div>}>
      <ClientTranslatedComponent />
    </SSRSafeSuspense>
  );
}

export default ClientTranslationPage;
