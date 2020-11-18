import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component"

describe('HeroComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent)
    })

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 }
        expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
    })

    it('should render the hero name in an anchor tag', () => {
        fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 }
        // run change detection and make any bindings in the component
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('a'))
        expect(de.nativeElement.textContent).toContain('SuperDude')

        // nativeElement represent the container for the template, HTML DOM element
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude')
    })
})