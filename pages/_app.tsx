import type { AppProps } from 'next/app'
import { appWithTranslation, UserConfig, useTranslation } from "next-i18next";

import nextI18nConfig from '../next-i18next.config';
import I18NextHttpBackend from "i18next-http-backend";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SSRSafeSuspense } from "@/components/SSRSafeSuspense";

function Header() {
  const { t } = useTranslation(['common'], { useSuspense: true });
  const { locale } = useRouter();

  return (
    <div>
      {t('hello')}
      <div>
        <Link href={''} locale={locale === 'en' ? 'ko' : 'en'}>
          Change locale
        </Link>
      </div>
    </div>
  );
}

function Layout({children}: PropsWithChildren) {
  return (
    <>
      <SSRSafeSuspense fallback={<div>Loading...</div>}>
        <Header />
      </SSRSafeSuspense>
      {children}
    </>
  );
}

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

const isBrowser = typeof window !== "undefined";

const clientI18nConfig: UserConfig = {
  ...nextI18nConfig,
  use: isBrowser ? [I18NextHttpBackend] : [],
  backend: isBrowser ? {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  } : undefined,
};

export default appWithTranslation(App, clientI18nConfig);
