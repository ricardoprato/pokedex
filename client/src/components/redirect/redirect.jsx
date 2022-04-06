import {useEffect} from "react";
import {useNavigate} from "react-router";
import NotFound from "../notfound/notfound";

export const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/", {replace: true});
  });
  return <NotFound />;
};
