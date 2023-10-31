import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Link from "next/link";

function ServerTranslationPage() {
  const { t } = useTranslation(['server']);

  return (
    <div>
      <Link href={'/client-translation'}>
        {t('server:toClient')}
      </Link>
    </div>
  );
}

export default ServerTranslationPage;

export const getStaticProps = (async ({ locale }) => {
  const translations = await serverSideTranslations(String(locale), ['server']);
  return {
    props: {
      ...translations,
    },
  };
}) satisfies GetStaticProps;
