import { Routes, Route } from 'react-router'
import Home from '../pages/home'
import About from '../pages/about'
import Team from '../pages/team'

function AppRoutes() {
	const navigationRoutes = [
		{
			path: '/gh-pages-react/',
			element: <Home />,
		},
		{
			path: '/gh-pages-react/team',
			element: <Team />,
		},
		{
			path: '/gh-pages-react/about',
			element: <About />,
		}
	]
  return (
	<Routes>
		{navigationRoutes.map((route, index) => (
			<Route key={index} path={route.path} element={route.element} />
		))}
	</Routes>
  )
}

export default AppRoutes