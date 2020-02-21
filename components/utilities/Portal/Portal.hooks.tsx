import {isDocumentDefined} from '~components/utilities/DetectBrowser/DetectBrowser';
import {useEffect} from 'react';

/** Creates a wrapper div and appends it as a child to body.
 * @return {HTMLElement} - Returns the HTML element to be used in a React Portal.
 */
export function usePortal(): HTMLElement | null {
  const root = isDocumentDefined() ? document.createElement('div') : null;

  useEffect(() => {
    if (root) {
      document.body.appendChild(root);

      return function cleanup(): void {
        document.body.removeChild(root);
      };
    }
  }, []);

  return root;
}
