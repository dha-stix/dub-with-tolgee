import { FormatIcu } from '@tolgee/format-icu';
import { DevTools, Tolgee } from '@tolgee/web';
import en from '../messages/en.json';

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export const ALL_LOCALES = ['en', 'ar', 'es', 'zh'];

export const DEFAULT_LOCALE = 'en';

export async function getStaticData(languages: string[]) {
  const result: Record<string, any> = {};
  console.log({ languages })
3
  // for (const lang of languages) {
  //   result[lang] = (await require(`../messages/en.json`)).default;
  // }
  result['en'] = en
  
  return result;
}

export function TolgeeBase() {
  return Tolgee().use(FormatIcu()).use(DevTools()).updateDefaults({
    apiKey,
    apiUrl,
    fallbackLanguage: 'en',
  });
}