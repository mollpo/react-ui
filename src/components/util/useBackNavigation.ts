import { useCallback } from 'react'
import { useRouter } from '../../framework'

export const useBackNavigation = () => {
  const router = useRouter()

  return {
    goBack: useCallback(
      ({ fallbackUrl }: { fallbackUrl: string }) => {
        const canGoBack =
          typeof window !== 'undefined' &&
          'navigation' in window &&
          typeof window.navigation === 'object' &&
          window.navigation !== null &&
          'canGoBack' in window.navigation &&
          typeof window.navigation.canGoBack === 'boolean'
            ? window.navigation.canGoBack
            : window.history.length > 1

        if (canGoBack) {
          router.back()
        } else {
          router.replace(fallbackUrl)
        }
      },
      [router],
    ),
  }
}
