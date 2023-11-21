type Props = {
  message: string;
};

const ErrorFormComponent = ({ message }: Props) => {
  return <span className="text-red-500 text-sm">{message}</span>;
};

export default ErrorFormComponent;
