import { useEffect } from "react";
import { useStore, UserType } from "../services/store";
import { useRouter } from "next/router";

const Auth: React.FC = () => {
  const store = useStore();
  const router = useRouter();

  useEffect(() => {
    if (!store.state.loggedIn) {
      router.push("/");
    }

    switch (store.state.userType) {
      case UserType.UNENROLLED:
        router.push("/EmployeeDashboard");
        break;
      case UserType.EMPLOYER:
        router.push("/EmployeeDashboard");
        break;
      case UserType.EMPLOYEE:
        router.push("/EmployeeDashboard");
        break;
    }
  }, [store.state.userType]);

  return <></>;
};

export default Auth;
