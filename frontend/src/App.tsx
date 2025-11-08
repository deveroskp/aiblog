import Header from './components/Header'
import { useAppContext } from './contexts/Appcontext'
import GithubPage from './components/Repo/RepoPage';
import PostPage from './pages/PostPage';

function App() {

  const { currentTab } = useAppContext();

  const renderPage = () => {
    switch (currentTab) {
      case 'github':
        return <GithubPage />;
      case 'post':
        return <PostPage />;
      default:
        return <GithubPage />;
    }
  }

  return (
    <>
      <Header />
      {renderPage()}
    </>
  )
}

export default App
