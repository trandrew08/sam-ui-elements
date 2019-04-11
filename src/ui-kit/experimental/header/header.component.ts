import { Component, Input } from '@angular/core';
import { HeaderModel, HeaderNavigationLink, HeaderSecondaryLink } from './model/HeaderModel';


@Component({
  selector: 'sam-header-v2',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class SamHeaderComponent {

  /**
   * Model used for the different display portions of the header 
   */
  @Input() model: HeaderModel;

  /**
   * Takes in a text string and removes all white space characters and returns the new string
   * @param text 
   */
  removeWhiteSpace(text: string) {
    return text.replace(/ /g, '');
  }

  /**
   * Deselects previous seletion
   * @param id 
   */
  select(id: string) {
    this.deselect();
    let item = this.find(id);
    if (item) {
      item.selected = true;
    }
  }

  /**
   * Deselects all the items in the header model
   */
  deselect() {
    if (this.model) {
      if (this.model.home) {
        this.model.home.selected = false;
      }
      if (this.model.navigationLinks) {
        this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {
          item.selected = false;
          if (item.children) {
            item.children.forEach(function (child: HeaderNavigationLink) {
              child.selected = false;
            });
          }
        });
      }
      if (this.model.secondaryLinks) {
        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {
          item.selected = false;
        });
      }
    }
  }

  /**
   * Finds the navigation element by id in the header model 
   * @param id of the navigation item
   */
  find(id: string) {
    let toReturn = null;
    if (this.model) {
      if (this.model.home) {
        if (this.model.home.id === id) {
          toReturn = this.model.home;
        }
      }
      if (this.model.navigationLinks) {
        this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {
          if (item.id === id) {
            toReturn = item;
          }
          if (item.children) {
            item.children.forEach(function (child: HeaderNavigationLink) {
              if (child.id === id) {
                toReturn = child;
              }
            });
          }
        });
      }
      if (this.model.secondaryLinks) {
        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {
          if (item.id === id) {
            toReturn = item;
          }
        });
      }
    }
    return toReturn;
  }

}
