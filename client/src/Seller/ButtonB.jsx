import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Refresh = () => {
    const RefreshButton=()=>{
        setTimeout(() => {
          document.location.reload();
        },1000);
      }
  return (
    <Stack  spacing={2} direction="row">
     
      <Button   style={{left:12,top:2, bottom:12, minWidth: 60,align:'right' }} onClick={RefreshButton} variant="outlined">Reload</Button>
    </Stack>
  )
}

export default Refresh