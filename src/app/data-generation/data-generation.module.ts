import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// MATERIAL IMPORTS (MUST be exactly these)
import { MatCardModule } from '@angular/material/card'; // Contains ALL card components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-data-generation',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // MATERIAL IMPORTS (Must be in this order)
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatError
  ],
  templateUrl: './data-generation.component.html',
  styleUrls: ['./data-generation.component.scss']
})
export class DataGenerationComponent {
  dataForm: FormGroup;
  isGenerating = false;
  generationResult: { success: boolean; message: string; filePath?: string } | null = null;

  constructor(private fb: FormBuilder) {
    this.dataForm = this.fb.group({
      recordCount: [0, [Validators.required, Validators.min(0), Validators.max(1000000)]]
    });
  }

  generateData(): void {
    if (this.dataForm.invalid) return;

    this.isGenerating = true;

    setTimeout(() => {
      this.generationResult = {
        success: true,
        message: `Generated ${this.dataForm.value.recordCount} records`,
        filePath: '/assets/generated-file.xlsx'
      };
      this.isGenerating = false;
    }, 2000);
  }
}