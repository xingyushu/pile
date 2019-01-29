import React from 'react'
import  {HashRouter,Link}  from 'react-router-dom'
// import Main  from './Main'
// import About  from './about'
// import Topic from './topic'
export default class  Home extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home1</Link>
                        </li>
                        <li>
                            <Link to="/main">Main</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topic">Topic</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>

                    </ul>

                    <hr />
                    {/* <Switch>
                        <Route exact path="/Main" component={Home} />
                        <Route path="/topic" component={Topic} />
                        <Route path="/about" component={About} />
                        <Route path="/topic" component={Topic} />
                   
                    </Switch> */}
                    {this.props.children}
                </div>
            </HashRouter>

        );
    }
}


