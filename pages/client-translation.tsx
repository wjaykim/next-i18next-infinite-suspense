import { useTranslation } from "next-i18next";
import Link from "next/link";

function ClientTranslationPage() {
  const { t } = useTranslation(['client'], { useSuspense: true });

  return (
    <div>
      <Link href={'/server-translation'}>
        {t('client:toServer')}
      </Link>
    </div>
  );
}

export default ClientTranslationPage;
