import { Outlet } from 'react-router-dom';
import { MenuAdmin } from './MenuAdmin';






export function ALayout(): JSX.Element {
  return (
    <div>

      <MenuAdmin />
      <div>
        <div>
         
          <Outlet />
        </div>
      </div>

    </div>



  );
}
