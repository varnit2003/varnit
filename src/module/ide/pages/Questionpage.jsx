import React from 'react'
import { ProblemStatement } from '../components/ProblemStatement'
import { Ide } from '../components/Ide'
import { Header } from '../../../shared/components/Header'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



export const Questionpage = () => {
  return (
    <Container>
        <Header />
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <ProblemStatement/>
            </Grid>
            <Grid item xs={6}>
            <Ide/>
            </Grid>
        </Grid>

        
        
    </Container>
  )
}
