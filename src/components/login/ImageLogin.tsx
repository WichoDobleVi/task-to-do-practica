import signIn from "/Time-management.svg";

export const ImageLogin = () => {
  return (
    <div style={{
        backgroundImage: `url(${signIn})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        backgroundColor: '#fff',
        borderRadius: '0 10px 10px 0'
    }}>
    </div>
  )
}
