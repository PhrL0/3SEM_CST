namespace Exercicio_02_Tony
{
    partial class Form1
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.liga = new System.Windows.Forms.Button();
            this.desliga = new System.Windows.Forms.Button();
            this.erro = new System.Windows.Forms.Button();
            this.sair = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // liga
            // 
            this.liga.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.liga.Location = new System.Drawing.Point(320, 116);
            this.liga.Name = "liga";
            this.liga.Size = new System.Drawing.Size(85, 79);
            this.liga.TabIndex = 0;
            this.liga.Text = "&LIGAR";
            this.liga.UseVisualStyleBackColor = true;
            this.liga.Click += new System.EventHandler(this.liga_Click);
            // 
            // desliga
            // 
            this.desliga.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.desliga.Location = new System.Drawing.Point(425, 116);
            this.desliga.Name = "desliga";
            this.desliga.Size = new System.Drawing.Size(85, 79);
            this.desliga.TabIndex = 1;
            this.desliga.Text = "DESLIGA&R";
            this.desliga.UseVisualStyleBackColor = true;
            this.desliga.Click += new System.EventHandler(this.desliga_Click);
            // 
            // erro
            // 
            this.erro.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.erro.Location = new System.Drawing.Point(320, 210);
            this.erro.Name = "erro";
            this.erro.Size = new System.Drawing.Size(85, 79);
            this.erro.TabIndex = 2;
            this.erro.Text = "ERROR";
            this.erro.UseVisualStyleBackColor = true;
            this.erro.Click += new System.EventHandler(this.button3_Click);
            // 
            // sair
            // 
            this.sair.Font = new System.Drawing.Font("Microsoft Sans Serif", 8.25F, ((System.Drawing.FontStyle)((System.Drawing.FontStyle.Bold | System.Drawing.FontStyle.Italic))), System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.sair.Location = new System.Drawing.Point(425, 210);
            this.sair.Name = "sair";
            this.sair.Size = new System.Drawing.Size(85, 79);
            this.sair.TabIndex = 3;
            this.sair.Text = "SA&IR";
            this.sair.UseVisualStyleBackColor = true;
            this.sair.Click += new System.EventHandler(this.sair_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 20.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(314, 54);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(41, 31);
            this.label1.TabIndex = 4;
            this.label1.Text = "...";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.sair);
            this.Controls.Add(this.erro);
            this.Controls.Add(this.desliga);
            this.Controls.Add(this.liga);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button liga;
        private System.Windows.Forms.Button desliga;
        private System.Windows.Forms.Button erro;
        private System.Windows.Forms.Button sair;
        private System.Windows.Forms.Label label1;
    }
}

