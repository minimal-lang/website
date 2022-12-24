import { Options } from '$fresh/plugins/twind.ts'
import { css } from 'twind/css'
import { apply } from 'twind'

export default {
  selfURL: import.meta.url,
  preflight(preflight) {
    delete preflight['img,video'];

    return css(preflight, {
      html: { scrollBehavior: 'smooth' },
      body: apply`flex flex-col items-center min-h-screen bg-light-I font-roboto-slab`,
      span: apply`text-font-soft`,
      a: apply`text-font-soft hover:underline cursor-pointer`
    })
  },
  theme: {
    fontFamily: {
      'roboto-slab': ['Roboto Slab']
    },
    extend: {},
  }
} as Options

