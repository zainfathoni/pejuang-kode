import React, { Fragment } from 'react'
import styled from 'styled-components'
import { faCalendarAlt, faClock } from '@fortawesome/pro-light-svg-icons'

import Icon from '../components/Icon'

const StyledDiv = styled.div`
  margin-bottom: 16px;
  opacity: 0.6;
  font-size: 0.8em;
`

const TimeLabel = ({ today, date, timeToRead, withIcon }) => (
  <StyledDiv>
    <time>
      {withIcon && (
        <Fragment>
          <Icon icon={faCalendarAlt} />{' '}
        </Fragment>
      )}
      {date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year:
          today.getFullYear() === date.getFullYear() ? undefined : 'numeric',
      })}
    </time>
    &nbsp;<strong>&middot;</strong>&nbsp;
    <span>
      {withIcon && (
        <Fragment>
          <Icon icon={faClock} />{' '}
        </Fragment>
      )}
      {timeToRead} menit
    </span>
  </StyledDiv>
)

export default TimeLabel
