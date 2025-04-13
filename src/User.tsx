import { Outlet, useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();
  // const [tab, setTab] = React.useState('profile');

  return (
    <div>
      <h1>User</h1>
      First Name: Tony <br />
      Last Name: Nguyen <br />

      <button type="button" onClick={() => navigate('profile')}>Profile</button>
      <button type='button' onClick={() => navigate('account')}>Account</button>

      <div>
        <Outlet />
      </div>

      {/* {tab === 'profile' && (
        <div>this is profile</div>
      )}

      {tab === 'account' && (
        <div>this is account</div>
      )} */}
    </div>
  )
}

export default User