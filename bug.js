The following code snippet demonstrates a common issue when using Firebase's `onAuthStateChanged` listener within a React component's useEffect hook.  The listener might not detach correctly, potentially leading to memory leaks or unexpected behavior. 

```javascript
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Your Firebase configuration

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      // This cleanup function might not always be called correctly, causing issues
      unsubscribe();
    };
  }, []);

  // ... rest of your component
}
```