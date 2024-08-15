import { AppRoute, AuthorizationStatus, BASE_ACTIVE_CITY } from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/auth/auth-selector';
import Spinner from '../spinner/spinner';

type AccessRouteData = {
  children: JSX.Element;
  isReverse?: boolean;
}

export default function AccessRoute({ children, isReverse }: AccessRouteData): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Main.replace(':selectedCity', BASE_ACTIVE_CITY) : AppRoute.Login} />
  );
}
