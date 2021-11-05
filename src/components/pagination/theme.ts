export default {
  container: {
    base: 'flex justify-between',
  },
  prevNext: {
    icon: {
      base: 'inline-block w-6 h-6 fill-current',
    },
    text: {
      base: 'hidden lg:block',
    },
  },
  pagesList: { base: 'flex items-center' },
  page: {
    base: 'flex items-center',
    normal: 'px-2',
    enabled: 'hover:underline',
    disabled: 'text-gray-500 cursor-not-allowed pointer-events-none',
    current: 'font-bold',
  },
}