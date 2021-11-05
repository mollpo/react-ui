export default {
  navigation: {
    base: 'flex flex-col flex-1 space-y-1',
  },
  item: {
    base: 'flex flex-row items-center w-full py-2 lg:py-3 px-4 lg:px-5 outline-none',
    normal:
      'text-gray-800 hover:text-black hover:bg-gray-100 focus:text-black focus:bg-gray-100 focus:ring',
    disabled: 'text-gray',
    active: 'text-primary bg-primary-50',
    icon: { base: 'mr-4 w-6 h-6 fill-current' },
    content: { base: 'flex-1 text-left' },
  },
  mobile: {
    dialog: {
      base: 'flex flex-row items-stretch min-h-screen relative mr-14 w-full max-w-sm',
      normal: 'bg-white',
      closeButton: {
        base: 'absolute right-0 p-4',
        normal: 'hover:opacity-60 active:opacity-60',
        icon: { base: 'fill-current' },
      },
    },
  },
}