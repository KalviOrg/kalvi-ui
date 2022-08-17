import dynamic from "next/dynamic";

const Login = dynamic(() => import("./TestLogin"), {
  ssr: false,
});

export default function App() {
  return (
    <section
    style={{
      backgroundImage: 'url(/bountyxbg-5.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}
  >
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="section">
        <p className="text-xxl text-[#0095d9] text-center mb-[8vh]">
          All in one platfrom for<span className="text-[#0095d9]"> Crypto rewards</span> and <span className="text-[#ea4335]">Incentives</span>
        </p>
        <br></br>
        <span className="flex items-center justify-center">
            <Login/>
        </span>
      </main>
    </div>
    </section>
    
  );
}