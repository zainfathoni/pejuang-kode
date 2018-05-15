import React from 'react'
import styled from 'styled-components'
import faCalendarAlt from '@fortawesome/fontawesome-pro-light/faCalendarAlt'
import faClock from '@fortawesome/fontawesome-pro-light/faClock'

import Icon from '../components/Icon'

const StyledDiv = styled.div`
  margin-bottom: 16px;
  opacity: 0.6;
  font-size: 0.8em;
`

const TimeLabel = ({ today, date, timeToRead }) => (
  <StyledDiv>
    <time>
      <Icon icon={faCalendarAlt} />&nbsp;
      {date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year:
          today.getFullYear() === date.getFullYear() ? undefined : 'numeric',
      })}
    </time>
    &nbsp;<strong>&middot;</strong>&nbsp;
    <span>
      <Icon icon={faClock} /> {timeToRead} menit
    </span>
  </StyledDiv>
)

export default TimeLabel
