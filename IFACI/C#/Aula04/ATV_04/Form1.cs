using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ATV_04
{
    public partial class Form1 : Form
    {
        public Boolean flag = false;
        public Form1()
        {
            InitializeComponent();
            toolStripLabel1.Text = DateTime.Now.ToLongDateString();
            pictureBox2.Image = Image.FromFile("c:\\Imagens\\alarme.jpg");
            pictureBox3.Image = Image.FromFile("c:\\Imagens\\torneira - Copia.jpg");
            pictureBox1.Tag = "Vazio";
            progressBar1.Minimum = 0;
            progressBar1.Maximum = 100;
            progressBar1.Value = 0;
            timer1.Stop();

        }

        private void toolStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
           
        }

        private void label1_Click(object sender, EventArgs e)
        {
            
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            progressBar1.Value = 10;
            label1.Text = DateTime.Now.ToLongTimeString();
            if (pictureBox1.Tag.ToString() == "Vazio")
            {
                pictureBox1.Image = Image.FromFile("c:\\Imagens\\tanqueMeioCheio.jpg");
                pictureBox1.Tag = "MeioCheio";
                progressBar1.Value = 50;
            }
            else if (pictureBox1.Tag.ToString() == "MeioCheio")
            {
                pictureBox1.Image = Image.FromFile("c:\\Imagens\\tanqueCheio.jpg");
                pictureBox1.Tag = "Cheio";
                progressBar1.Value = 100;
            }
            else if (pictureBox1.Tag.ToString() == "Cheio")
            {
                pictureBox1.Image = Image.FromFile("c:\\Imagens\\tanqueVazio.jpg");
                pictureBox1.Tag = "Vazio";

            }
            else
            {
                pictureBox1.Image = Image.FromFile("c:\\Imagens\\tanqueVazio.jpg");
                pictureBox1.Tag = "Vazio";
            }
        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            Process.Start("notepad");
        }

        private void toolStripButton2_Click(object sender, EventArgs e)
        {
            Process.Start("calc");
        }

        private void button1_Click(object sender, EventArgs e)
        {
           timer1.Start();
           flag = true;
        }

        private void pictureBox2_Click(object sender, EventArgs e)
        {
            timer1.Stop();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (!flag)
            {
                Application.Exit();
            }
            else
            {
                DialogResult result = MessageBox.Show("Você desligou a máquina?", "Confirmação",
                    MessageBoxButtons.YesNo, MessageBoxIcon.Question);

                if (result == DialogResult.Yes)
                {
                    Application.Exit(); 
                }
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            timer1.Stop();
            flag = false;
            pictureBox1.Image = Image.FromFile("c:\\Imagens\\tanqueVazio.jpg");
            pictureBox1.Tag = "Vazio";
            progressBar1.Value = 0;

        }
    }
}
