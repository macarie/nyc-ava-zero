import test from 'ava'

import { v } from './index.js'

test('is this a test?', t => {
  t.is(v(3), 4)
})

test('and this one?', t => {
  t.is(v(4), 5)
})
