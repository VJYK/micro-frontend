### Decorators
- Decorators are special functions that add metadata to a class, property or methods.
#### Types
- Class: @Component,@Injectable,@NgModule,@Pipe
- Property: @Input, @Ouput, @ViewChild
- Methods: @HostListener,@HostBinding
- Parameterized: @Inject('API_URL')

### Change Detection Strategy
- When and how to updates the dom when application data changes.
- Angular has two main strategies: Default and OnPush.
- Default: Angular checks all components in application whenever any events occurs, such as user interaction, HTTP response, or timers.
- OnPush: Angular only checks component when its input references changes, an event occurs inside component.use inside `{changeDetection:ChangeDetectionStrategy.OnPush}`.




