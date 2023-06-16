import { Routes, Route } from 'react-router-dom'

import Header from './components/Header';

import HomePage from './pages/HomePage'
import CredentialListPage from './pages/CredentialListPage';
import AddCredentialPage from './pages/AddCredentialPage';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/credentials" element={<CredentialListPage />} />
        <Route path="/credentials/add" element={<AddCredentialPage />} />
        <Route path="/crendetials/:id" element={<h1>Edit Credential</h1>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
