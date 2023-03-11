import { useCurrentUser, SignInButton } from '~features/authenticate';
import { UserAvatar } from '~entities/user';
import { Dropdown } from '~shared/ui';

export function Header() {
  const currentUser = useCurrentUser();

  if (currentUser === null) {
    return <SignInButton />;
  } else {
    return <Dropdown>
      <Dropdown.Header>
        <UserAvatar user={currentUser} />
      </Dropdown.Header>
      <Dropdown.Body>
        <Dropdown.Item href="/account">Account</Dropdown.Item>
        <Dropdown.Item href="/api/auth/sign-out">Sign out</Dropdown.Item>
      </Dropdown.Body>
    </Dropdown>
  }
}
