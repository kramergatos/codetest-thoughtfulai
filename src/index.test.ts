import { expect, test } from 'vitest'
import { sort } from './index'

test( 'sort should return STANDARD when the package is not bulky or heavy', () => {
  expect(
    sort( 10, 20, 20, 10 )
  ).toBe( 'STANDARD' )
})

test( 'sort should return SPECIAL when the package is bulky', () => {
  expect(
    sort( 100, 100, 100, 10 )
  ).toBe( 'SPECIAL' )
})

test( 'sort should return SPECIAL when the package is heavy', () => {
  expect(
    sort( 10, 20, 20, 50 )
  ).toBe( 'SPECIAL' )
})

test( 'sort should return REJECTED when the package is both bulky and heavy', () => {
  expect(
    sort( 100, 100, 100, 30 )
  ).toBe( 'REJECTED' )
})


test( 'sort should return REJECTED when the package has invalid dimensions', () => {
  expect(
    sort( -20, 20, 20, 10 )
  ).toBe( 'REJECTED' )
})

test( 'sort should return REJECTED when the package has invalid weight', () => {
  expect(
    sort( 20, 20, 20, -1 )
  ).toBe( 'REJECTED' )
})