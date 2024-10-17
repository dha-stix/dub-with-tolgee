import { Logger } from "next-axiom";
import { NextFetchEvent, NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { ALL_LOCALES, DEFAULT_LOCALE } from '../../tolgee/shared';

const TolgeeMiddleware = createMiddleware({
  locales: ALL_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed',
});

export default function AxiomMiddleware(req: NextRequest, ev: NextFetchEvent) {
  const logger = new Logger({ source: "middleware" }); // traffic, request
  logger.middleware(req);
  TolgeeMiddleware(req);
  ev.waitUntil(logger.flush());
}
