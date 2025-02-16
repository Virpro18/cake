const Navigation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="bg-gray-100 p-2">
        <a href="/profile">Profile</a>
        <a href="/profile/settings">Settings</a>
        <a href="/profile/notifications">Notifications</a>
      </div>
    </div>
  );
};
export default Navigation;
