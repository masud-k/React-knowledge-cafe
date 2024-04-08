import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between p-4 m-4'>
            <h1 className='text-4xl text-rose-500'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;