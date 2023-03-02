import { useElement, useLayout, useEffect, useApp } from '@nebula.js/stardust';
import properties from './object-properties';
import extDefinition from './extDefinition'
import data from './data';
import { render } from './root';

// const item1 = {
//   ref: 'props.section1.item1',
//   label: 'Item 1',
//   type: 'string',
//   expression: 'optional'
// };

export default function supernova(galaxy) {
  return {
    // ext: {
    //   definition: {
    //     type: 'items',
    //     component: 'accordion',
    //     items: {
    //       component: 'expandable-items',
    //       label: galaxy.anything.translator.get("labels.mysection"),
    //       items: {
    //         header1: {
    //           type: 'items',
    //           label: 'Header 1',
    //           items: {
    //             item1

    //           },
    //         },
    //       },
    //     },
    //   },
    // },
    qae: {
      properties,
      data,
    },

    component() {
      const el = useElement();
      const layout = useLayout();
      const app = useApp();
      const getSheets = () => {
        return app.getAllInfos().then(infos => {
          return infos.filter(infoItem => infoItem.qType === 'sheet').map(sheet => {
            debugger;
            const item = {
              value: sheet.qId
            }

            app.getObject(sheet.qId).then(obj => {
              return obj.getLayout().then(objLayout => {
                item.label = objLayout.qMeta.title
              })
            })
            return item
          })
        })
      }

      const sheetNavigation = (sheetId) => {


        debugger;
        console.log("sheetNavigation")
        galaxy.anything.sense.navigation.goToSheet(sheetId);
        console.log("sheetNavigationAfterNavigation")
      }

      // const sheets = await getSheets();

      useEffect(async () => {

        // let sheets = await getSheets();
        // debugger;
        // // do some heavy update
      }, [layout]);

      render(el, app, layout, getSheets, sheetNavigation, { layout });
    },
  };
}
