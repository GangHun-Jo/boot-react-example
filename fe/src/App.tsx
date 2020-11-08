import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MainContainer from './pages/MainContainer'

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={['/', '/test/test']}>
                        <MainContainer/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App
