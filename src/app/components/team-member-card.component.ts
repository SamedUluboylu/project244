import { Component, Input } from '@angular/core';
import { TeamMember } from '../models/team-member.model';

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  templateUrl: './team-member-card.component.html'
})
export class TeamMemberCardComponent {
  @Input({ required: true }) member!: TeamMember;
}
