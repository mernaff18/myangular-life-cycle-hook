Angular
---------------------------------------------------------------------------------------------
Reference link
  https://angular.io/
  
  https://codeburst.io/angular-8-cli-introduction-and-commands-example-ce86accf8156

---------------------------------------------------------------------------------------------
(1) Angular requirements: Install NodeJS and npm
---------------------------------------------------------------------------------------------
    i) After install NodeJS check the version 
        •	node -v or node --version(checking node version)
        •	npm -v  or npm version or npm -version or npm --version (check npm version)
        *npm defalut install with nodejs 

---------------------------------------------------------------------------------------------
(2) Create Angular App
---------------------------------------------------------------------------------------------
    i) Open CMD and install angular cli using below command
         npm install -g @angular/cli
            •	ng  --version or ng v  (check angular version)
    ii) Create new angular app using
            ng new app-name
    iii) cd app-name
    iv) ng serve


---------------------------------------------------------------------------------------------
(3)	Angular Cli Commands
---------------------------------------------------------------------------------------------
    i) ng g c componentname or ng generate component 
      https://icodefy.com/angular-cli-commands/

----------------------------------------------------------------------------------------------
(4)	Angular Components
----------------------------------------------------------------------------------------------   
    •	ng generate component componentname

    •	Selector
         o	by element  = selector : ‘selectorname’
            	in html <selectorname><selectorname>

         o	by attribute  = selector:[selectorname]
            	in html <div selectorname></div>

         o	by class  =  selector : '.selectorname'
            	in html <div class=”selectorname”><selectorname>

    •	Template
         o	tempateUrl  = >  for include html file
         o	template  -= > for inline html 

    •	Styles
         o	styleUrls => External style
         o	style => Inline style

----------------------------------------------------------------------------------------------
(5)	DataBiniding
----------------------------------------------------------------------------------------------
    a.	String Interpolation
            i.	{{ data }}
    b.	Property Binding
            i.	[property] = data
    c.	Event Binding
            i.	(click) = “function()”


----------------------------------------------------------------------------------------------
(6)	View Encapsulation
----------------------------------------------------------------------------------------------
    Inside Component in the @Component decorator
     
      Encapsulation : ViewEncapsulation: Emulated, Native, None
       
      Default Value : Emulated (styles applied only for component and common styles apply for all component)
      Native : Common style not applied to Component
      None: Component style applied to Common 


----------------------------------------------------------------------------------------------
(7)*ngIf and else
----------------------------------------------------------------------------------------------
    Syntax
        *ngIf = "isvalid"

        *ngIf = "isvalid ; else templatename"
        <ng-template #templatename></ng-template>

        *ngIf = "isvalid ; then validtemplate; else templatename"
        <ng-template #validtemplate></ng-template>
        <ng-template #templatename></ng-template>

----------------------------------------------------------------------------------------------
(8) ngClass and ngStyle and ngNonBindable
----------------------------------------------------------------------------------------------
    [ngStyle]="{'background-color':'green'}"
    [ngStyle]="{'background-color':person.country === 'UK' ? 'green' : 'red' }"

    [ngClass]="{'text-success':true}"
    [ngClass]="{'text-success':person.country === 'UK'}"

    <div>
        To render the name variable we use this syntax <pre ngNonBindable>{{ name }}</pre>
    </div>
     {{name }} take as normal html


----------------------------------------------------------------------------------------------
(9) *ngFor
----------------------------------------------------------------------------------------------
    *ngFor="let user of usertable"

    *ngFor = "let useraddress of user.address"

    let i = index;
    let odd = odd;
    let even = even;
    let first = first;
    let last = last;
    trackBy = trackbyFuction();

    *trackbyFuction is userdefined.it get two value index and current value
    trackbyFunction(index,value){

    }


----------------------------------------------------------------------------------------------
(10) *ngSwitch
----------------------------------------------------------------------------------------------
  example: 
      <ul *ngFor="let person of people"
            [ngSwitch]="person.country">
            <li *ngSwitchCase="'UK'"
                class="text-success">
                {{ person.name }} ({{ person.country }})
            </li>
            <li *ngSwitchCase="'USA'"
                class="text-primary">
                {{ person.name }} ({{ person.country }})
            </li>
            <li *ngSwitchCase="'HK'"
                class="text-danger">
                {{ person.name }} ({{ person.country }})
            </li>
            <li *ngSwitchDefault
                class="text-warning">
                {{ person.name }} ({{ person.country }})
            </li>
        </ul>

----------------------------------------------------------------------------------------------
(11) @Input
----------------------------------------------------------------------------------------------     
    Pass value from parent to child
        Syntax:
            Child component : @Input()  varname:type
            Parent Component  [varname]="value" 
               in Child {{varname}}
            
            Child component : @Input('aliasname')  varname:type
            Parent Component  [alisename]="value" 
               in Child {{varname}}
            

    ( For Content Projection Check Section 5 -> 75 and also Section 5 -> 65)


----------------------------------------------------------------------------------------------
(12) @Output
----------------------------------------------------------------------------------------------
	Emit value from child to parent
        Syntax
            Child Component :
                @Output() vars : new EventEmitter() 
                @Output('alias') vars : new EventEmitter() 
                outputfunction(story){
                    this.vars.emit(story)
                }
                (click) = “outputfunction(story)”

            Parent Component:
                <childcomponent (vars)=”fn($event)></childcomponnet>
                <childcomponent (alias)=”fn($event)></childcomponnet>
                fn(ss){
                    this.emitvalue = ss
                }
				
				
----------------------------------------------------------------------------------------------
(13) Services
----------------------------------------------------------------------------------------------
   Service is a class with specific function
   i)Share Data
   ii) implementing application logic
   iii) extenal interaction
   
   DI is a coding pattern which class receive its dependecy from external sources rather than creating them itself
   
   ex:
		import { Injectable } from '@angular/core';
		@Injectable({
		  providedIn:'root'
		})
		export class DataService {

		  getAuthors(){
          return ["Author 1","Author 2","Author 3"];
         }

		}
		
		import { DataService } from './data.service';
		constructor(service: DataService){
          this.authors = service.getAuthors();
        }
----------------------------------------------------------------------------------------------
(14) Http
----------------------------------------------------------------------------------------------
       Most front-end applications need to communicate with a server over the HTTP protocol, 
	   in order to download or upload data and access other back-end services. 
	   Angular provides a simplified client HTTP API for Angular applications, 
	   the HttpClient service class in @angular/common/http.
	   
	   import { HttpClientModule } from '@angular/common/http';
	   import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
	   
	   constructor(private http: HttpClient) { }
	   
	   checkusernameandpassword(user_name:string,password:string)
	  {
		return this.http.post( this.baseUrl+'login', {}, { params: { user_name: user_name, password: password } })
	  }
	  
	 this.loginService.checkusernameandpassword(this.LoginForm.value.email, this.LoginForm.value.password).subscribe(data => {
	 });

----------------------------------------------------------------------------------------------
(15) Content Projection
----------------------------------------------------------------------------------------------
    If we add the tag <ng-content></ng-content> anywhere in our template HTML for our component. 
    Refer
      https://codecraft.tv/courses/angular/components/content-projection/



----------------------------------------------------------------------------------------------
(16) ViewChild and ViewChilderen, ContentChild and ContentChilderen
----------------------------------------------------------------------------------------------

Refer
  https://www.infragistics.com/community/blogs/b/infragistics/posts/simplifying-viewchild-nad-contentchild-in-angular 

  It is used to access Child Component in the Parent Component
  It use to access and manipulate DOM elements, directives and components.

  when component inside a template then use ContentChild or ContentChilderen 

  ie when content project is used

  @ViewChild(HelloComponent, {static: false}) hello: HelloComponent;
  @ViewChild('pRef', {static: false}) pRef: ElementRef;
  @ViewChildren(HelloComponent) hellos: QueryList<any>;

  @ContentChild(HelloComponent, {static: false}) hello: HelloComponent;
  @ContentChild('pRef', {static: false}) pRef: ElementRef;
  @ContentChilderen(HelloComponent) hellos: QueryList<any>;


    ngAfterViewInit() 
    {
        console.log('Hello ', this.hello.name);
        console.log(this.pRef.nativeElement.innerHTML); 
        this.pRef.nativeElement.innerHTML = "DOM updated successfully!!!"; 

        this.hellos.forEach(hello => console.log(hello));
    }

static false --> it is used for define inside  ngAfterViewInit() 
static true --> it is used for define inside  ngOnInit()

    for template Ref
    in HelloComponent
        <p #pRef>
        Start editing to see some magic happen :)
        </p>






----------------------------------------------------------------------------------------------
(17) Life Cycle Hooks
----------------------------------------------------------------------------------------------
    1)ngOnChanges
         Called after any chnages done in @Input property
    2)ngOninit
         Called Once the Component is Initialized
    3)ngDoCheck
        Called during Every Changes
    4)ngAfterContentInit
        Called after content project done ie ng-content
    5)ngAfterContentChecked
        Called evert time when projected content in checked
    6)ngAfterViewInit
        Called after Component's View has been intiallized
    7)ngAfterViewChecked
        Called every time the view has been checked
    8)ngOnDestroy
        Called Once the component is about to destroy




----------------------------------------------------------------------------------------------
(18) JIT and AOT
----------------------------------------------------------------------------------------------
    JIT is Just In Time
        Just in Time run during Compile time in Browser. Compiler in-build in Vendor.Js
    AOT
        Ahide of Time run during build time. Its a pre compiled version 

----------------------------------------------------------------------------------------------
(19) Treeshaking
----------------------------------------------------------------------------------------------
    It Remove unwanted function and Component

----------------------------------------------------------------------------------------------
(20) Minification
----------------------------------------------------------------------------------------------
    Compress the File, Remove unwanted spaces, Command line from the files

----------------------------------------------------------------------------------------------
(21) Uglification
----------------------------------------------------------------------------------------------
    Rename the function parameter in shorthand  


----------------------------------------------------------------------------------------------
(22) Promise & Observable
----------------------------------------------------------------------------------------------
	Promise: 
		Emit single value at a time
		A promise is Not Lazy
		A Promise cannot be cancelled
	 

	Observable: 
		Emit multiple value over a time
		Observable is Lazy. The "Observable" is slow. It isn't called until we are subscribed to it. 
		An Observable can be cancelled by using the unsubscribe() method
		An addition Observable provides many powerful operators like map, foreach, filter, reduce, retry, retryWhen etc
