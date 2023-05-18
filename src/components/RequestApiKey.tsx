
import {useState} from 'react';


const RequestApiKey: React.FunctionComponent = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  return <div>RequestApiKey</div>;
};

export default RequestApiKey;
