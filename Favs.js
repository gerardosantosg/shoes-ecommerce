import React from 'react'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge)

const Favs = ({ favItems }) => {
  return (
    <IconButton aria-label='favorite'>
      <StyledBadge badgeContent={favItems.length} color='secondary'>
        <FavoriteIcon />
      </StyledBadge>
    </IconButton>
  )
}

export default Favs
