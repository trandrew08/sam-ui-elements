import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { OptionsType } from '../../../../ui-kit/types';
import { Observable, BehaviorSubject } from 'rxjs';
import { GridDisplayedColumn } from '../hierarchical-tree-grid/hierarchical-tree-grid.component';
import { SamHiercarchicalServiceInterface } from '../hierarchical-interface';

export interface HierarchyConfiguration {
  gridDisplayedColumn: GridDisplayedColumn[],
  primaryKey: string,
  options: OptionsType[],
  filterPlaceholder: string,
  topLevelText: string;
}

@Component({
  selector: 'sam-hierarchical-tree',
  templateUrl: './hierarchical-tree.component.html',
  styleUrls: ['./hierarchical-tree.component.scss']
})

export class SamHierarchicalTreeComponent implements OnInit {

  public selecteHierarchyLevel = new BehaviorSubject<object>(null);
  public selectResults$ = new BehaviorSubject<object[]>([]);
  public filterTextSubject = new BehaviorSubject<string>('');
  public selectBreadcrumb = new BehaviorSubject<string>(null);

  public results: object[];

  public gridResults: Observable<object[]>;


  private selectedResults: object[];
  private filterText: string;
  private selectedValue: string;


  /**
   * 
   */
  @Input() service: SamHiercarchicalServiceInterface;

  /**
  * hierarchy tree picker configurations 
  */
  @Input() hierarchyConfiguration: HierarchyConfiguration;

  /**
  * Data for the Table.
  *  Observable data array
  * Stream that emit a array each time when the item is selected.
  * Stream that changes each time when click action trigger on row.
  */
  //@Input() 
  gridData: object[];
  /**
  * Event emitted when row is clicked
  */
  //@Output() public rowChanged = new EventEmitter<object>();

  /**
  * Event emitted when level change is clicked
  */
  //@Output() public selectedAgency = new EventEmitter<string>();

  /**
  * Event emitted when row set is selected.
  */
  @Output() selectResults = new EventEmitter<object[]>();

  constructor(private cdr: ChangeDetectorRef) { }

  private breadcrumbStack: object[] = [];
  private breadcrumbStackSelectable: object[] = [];


  public ngOnInit() {

    this.selecteHierarchyLevel.subscribe(
      value => this.selectItem(value)

    );

    this.selectBreadcrumb.subscribe(
      value => {
        let item = this.breadcrumbStack.find(itm => itm[this.hierarchyConfiguration.primaryKey] === value);
        this.selectItem(item);
        //Clean out stacks 

        // this.breadcrumbStackSelectable.unshift(breadCrumbItem);
        // this.breadcrumbStack.unshift(value);
      }
    );
    this.selectResults$.subscribe(
      res => {
        this.results = [];
        this.results = res;
      }
    );
    this.filterTextSubject.subscribe(
      text => {
        this.filterText = text;
        console.log('filterTextSubject');
        console.log(text)
        this.getResults();
      }
    );
  }






  selectItem(value: object) {
    //clearFilter

    if (value) {
      this.selectedValue = value[this.hierarchyConfiguration.primaryKey];
    } else {
      this.selectedValue = null;
    }


    const breadCrumbItem = {};
    if (value) {
      breadCrumbItem['name'] = value['name'];
      breadCrumbItem['id'] = value[this.hierarchyConfiguration.primaryKey];
      breadCrumbItem['value'] = value[this.hierarchyConfiguration.primaryKey];
      breadCrumbItem['label'] = value['name'];
    }
    // else{
    //   breadCrumbItem['name'] = 'Top Level';
    //   breadCrumbItem['id'] = null;
    //   breadCrumbItem['value']  = null;
    //   breadCrumbItem['label'] =  'Top Level';

    // }
    let breadcrumbStackPostion = this.breadcrumbStack.indexOf(breadCrumbItem);
    if (breadcrumbStackPostion === -1 && value) {
      this.breadcrumbStackSelectable.unshift(breadCrumbItem);
      this.breadcrumbStack.unshift(value);
    } else {
      console.log("breadcrumbStack");
      console.log(breadcrumbStackPostion);
    }
    this.getResults();
  }

  onSelect(): void {
    this.selectResults.emit(this.results)
  }


  getResults() {
    this.gridResults = this.service.getHiercarchicalById(this.selectedValue, this.filterText);
  }



}
