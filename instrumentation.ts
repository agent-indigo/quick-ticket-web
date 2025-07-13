import * as Sentry from '@sentry/nextjs'
export const register: Function = async (): Promise<void> => {
  process.env.NEXT_RUNTIME === 'nodejs' && await import('./sentry.server.config')
  process.env.NEXT_RUNTIME === 'edge' && await import('./sentry.edge.config')
}
export const onRequestError: Function = Sentry.captureRequestError