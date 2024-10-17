import Toolbar from "@/ui/layout/toolbar/toolbar";
import { Background } from "@dub/ui";
import Providers from "app/providers";
import { ReactNode } from "react";
// additions
// import { TolgeeNextProvider } from '../../../tolgee/client';
// import { ALL_LOCALES, getStaticData } from '../../../tolgee/shared';
// import NotFound from "../../not-found";

type Props = {
  children: ReactNode;
  // params: { locale: string };
};

export default async function AuthLayout(
  {
  children,
  // params: { locale }
  }: Props
) {
  // if (!ALL_LOCALES) {
  //   return (
  //     <html>
  //       <body>
  //         <NotFound/>
  //       </body>
  //     </html>
  //   )
  // }

  // const locales = await getStaticData([locale, 'en']);

  return (
    // <html lang={locale}>
    <html>
      <body>
        {/* <TolgeeNextProvider locale={locale} locales={locales}> */}
        <Providers>
          
      <Toolbar />
      <Background />
        {children}
          
        </Providers>
        {/* </TolgeeNextProvider> */}
      </body>
    </html>
    
  );
}
