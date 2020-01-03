import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import Series from './pages/Series';
import SeriesInfo from './pages/SeriesInfo';
import Genres from './pages/Genres';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Series}/>
			<Route path="/genres" component={Genres} />
			<Route path="/series" component={Series} />
			<Route path="/series-info/:id" component={SeriesInfo} />
		</Switch>
	</Router>
);

export default Routes;