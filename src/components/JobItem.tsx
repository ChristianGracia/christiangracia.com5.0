import { type FC } from "react";
import type { Job } from "./JobContainer";

const JobItem: FC<Job> = (job: Job) => {
  return (
    <div className="job-history-container">
      {/* <div *ngFor="let job of jobs" class="flex flex-col company-card">
      <div
        class="flex flex-row align-center justify-space-between company-title-row"
      >
        <div
          class="text-bold accent-color mat-title clickable company-name"
          (click)="openSite(job.website ?? '')"
        >
          {{ job.company }}
        </div>
        <div class="text-bold mat-caption">{{ job.range }}</div>
      </div>
      <div class="job-description mat-subheading-2">{{ job.description }}</div>

      <div class="flex justify-center view-more-container">
        <button
          *ngIf="!job.viewMoreOpen"
          mat-raised-button
          color="accent"
          aria-label="View more"
          (click)="viewMoreJob(job)"
        >
          View Projects
        </button>
      </div>

      <app-job *ngIf="job.viewMoreOpen ?? false" [job]="job"></app-job>
    </div> */}
    </div>
  );
};

export default JobItem;
