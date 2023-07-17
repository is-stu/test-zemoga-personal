/* eslint-env jest */

import { render } from '@testing-library/react'
import { PersonCard } from '../components/PersonCard/PersonCard'

describe('PersonCard Testing', () => {
  test('should match with snapshot', () => {
    const { container } = render(<PersonCard />)

    expect(container).toMatchSnapshot()
  })
})
