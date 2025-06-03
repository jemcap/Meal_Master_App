import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return { userId: user?.id || null };
};

export default useAuth;